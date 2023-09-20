import os
import re

def find_replace_in_directory(directory, find_string, replace_string,skip_exact_replacement=True):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r') as file:
                        file_contents = file.read()
                except:
                    print(f'Could not read {file_path}')
                    continue
                # Check if the find_string exists in the file
                if find_string in file_contents:
                    # Check if the exact replacement string already exists
                    if replace_string not in file_contents or not skip_exact_replacement:
                        # Perform the replacement
                        new_contents = file_contents.replace(find_string, replace_string)
                        with open(file_path, 'w') as file:
                            file.write(new_contents)
                        print(f'Replaced in {file_path}')
                    else:
                        print(f'Skipped (Exact replacement exists) in {file_path}')
                else:
                    print(f'Skipped (Find string not found) in {file_path}')


if __name__ == "__main__":
    print(__name__)
    # Find and replace in the current directory
    find_string = '</head>'
    replace_string = """
    <script>
      // Retrieve the user ID from localStorage
      var userId = localStorage.getItem("userId");

      // Create the Matomo Tag Manager (MTM) object
      var _paq = window._paq = window._paq || [];

      // Set the user ID in MTM if it exists
      if (userId) {
        _paq.push(['setUserId', userId]);
        _paq.push(['trackPageView']);
      }

      // Initialize Matomo Tag Manager
      var u = "https://silveranabelle7tiinysite.matomo.cloud/";
        _paq.push(['setTrackerUrl', u + 'matomo.php']);
        _paq.push(['setSiteId', '1']);
      _paq.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
      (function() {
        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src='https://cdn.matomo.cloud/silveranabelle7tiinysite.matomo.cloud/container_pozlUz1s.js'; s.parentNode.insertBefore(g,s);
      })();
    </script>
    </head> 
    """

    # directory = "public/regular_search_micro"
    directory = "public/xyz_search_micro"

    find_replace_in_directory(directory, find_string, replace_string)
    # find_replace_in_directory(directory, replace_string, find_string, False)



# <script>
#   var _mtm = window._mtm = window._mtm || [];
#   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
#   (function() {
#     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
#     g.async=true; g.src='https://cdn.matomo.cloud/silveranabelle7tiinysite.matomo.cloud/container_pozlUz1s.js'; s.parentNode.insertBefore(g,s);
#   })();
# </script>

    # replace_string = """
    # <script>
    #   // Retrieve the user ID from localStorage
    #   var userId = localStorage.getItem("userId");
    #
    #   // Create the Matomo Tag Manager (MTM) object
    #   var _mtm = window._mtm = window._mtm || [];
    #
    #   // Set the user ID in MTM if it exists
    #   if (userId) {
    #     _mtm.push(['setUserId', userId]);
    #   }
    #
    #   // Initialize Matomo Tag Manager
    #   _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
    #   (function() {
    #     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    #     g.async=true; g.src='https://cdn.matomo.cloud/silveranabelle7tiinysite.matomo.cloud/container_pozlUz1s.js'; s.parentNode.insertBefore(g,s);
    #   })();
    # </script>
    # </head>
    # """
