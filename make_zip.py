import zipfile, os, sys

dist_dir = r"D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site\dist"
zip_path = r"D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site\new-deploy.zip"

if os.path.exists(zip_path):
    os.remove(zip_path)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
    for root, dirs, files in os.walk(dist_dir):
        for file in files:
            abs_path = os.path.join(root, file)
            # Use forward slashes for Netlify (Linux server)
            rel_path = os.path.relpath(abs_path, dist_dir).replace('\\', '/')
            zf.write(abs_path, rel_path)
            print(f'Added: {rel_path}')

print('ZIP created successfully!')
print(f'Size: {os.path.getsize(zip_path)} bytes')
