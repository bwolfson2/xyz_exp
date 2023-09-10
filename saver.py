#from the html file scrape all href's that are of the form:
# <div class=searchPage__result><a target="_blank"
                    #         href=https://www.epa.gov/recycle/preventing-wasted-food-home>https://www.epa.gov/recycle/preventing-wasted-food-home</a><a
                    #         target="_blank" class=searchPage__resultTitle
                    #         href=https://www.epa.gov/recycle/preventing-wasted-food-home>
                    #         <h2> Preventing Wasted Food At Home | US EPA</h2>
                    #     </a>
                    #     <p class=searchPage__resultSnippet></p>
                    # </div>
# and save them to a file
import re
from bs4 import BeautifulSoup
import os



#def save list of links to a file
def save_links(links, output_file):
    with open(output_file, 'w') as f:
        for link in links:
            f.write(link + '\n')

#load links
def load_links(input_file):
    with open(input_file, 'r') as f:
        links = f.read().splitlines()
    return links


def get_links(html_file,folder_prefix = 'public'):
    # create output folder if it does not exist, name it with the html file name without ending
    output_folder = '{}/{}'.format(folder_prefix, html_file.split('.')[0])
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    #load links if they exist
    links_file = '{}/links.txt'.format(output_folder)
    if os.path.exists(links_file):
        return load_links(links_file)

    with open(html_file, 'r') as f:
        html = f.read()
    
    soup = BeautifulSoup(html, 'html.parser')
    #find hrefs in divs named searchPage__result
    divs = soup.find_all('div', class_='searchPage__result')
    #links is a list of links
    links = []
    for div in divs:
        #find the href
        href = div.find('a', href=True)
        #add it to links
        links.append(href['href'])

    #save contented of wget the each link, 
    #and save it to a file numbered
    #1, 2, 3, ... in the output folder
    for i, link in enumerate(links):
        # wget the link
        os.system('curl -o {}/{}.html {}'.format(output_folder, i+1, link))
        # 'curl -o {}/{}.html {}'.format(output_folder, i+1, link)

        #print the link
        print(link)
    #save links to file in the folder
    save_links(links, '{}/links.txt'.format(output_folder))

    return links

def replace_links(links,html_file, folder_prefix = 'public'):
    #load the html file
    with open(html_file, 'r') as f:
        html = f.read()
    #replace every link in the html file with the corresponding micro link formatted with
    # folder_prefix only if it starts with "href=""
    for i, link in enumerate(links):
        html = html.replace('href={}'.format(link), 'href="{}/{}.html"'.format(folder_prefix, i+1))
    
    #save the html file
    with open("mod_"+html_file, 'w') as f:
        f.write(html)
    



if __name__ == '__main__':
    #get links from the html file
    micro_links = get_links('regular_search_micro.html')
    xyz_links = get_links('xyz_search_micro.html')
    #replace every link in the html files with the corresponding micro link then save the html files`
    #load the html file
    replace_links(micro_links, 'regular_search_micro.html',"regular_search_micro")
    replace_links(xyz_links, 'xyz_search_micro.html',"xyz_search_micro")
    print()