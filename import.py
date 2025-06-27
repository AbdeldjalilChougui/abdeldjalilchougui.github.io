import os
import json

def get_image_list_as_js(folder_path):
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp')
    result = {}

    # Loop through each subfolder
    for subfolder in sorted(os.listdir(folder_path)):
        subfolder_path = os.path.join(folder_path, subfolder)
        if os.path.isdir(subfolder_path):
            images = [
                f for f in sorted(os.listdir(subfolder_path))
                if f.lower().endswith(image_extensions)
            ]
            result[subfolder] = images

    # Convert to JavaScript-style object string
    js_output = "const images = " + json.dumps(result, indent=2) + ";"
    return js_output

# Example usage
print(get_image_list_as_js("assets/img/portfolio/"))
