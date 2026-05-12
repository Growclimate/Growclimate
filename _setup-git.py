# -*- coding: utf-8 -*-
import subprocess
import os
import sys

# Set the project directory
project_dir = r'D:\汪珍妮-工作资料\独立站用图\Growclimate 源代码\growclimate-site'
os.chdir(project_dir)

# Add git to PATH
os.environ['PATH'] = r'C:\Program Files\Git\cmd;' + os.environ['PATH']

def run_git(args):
    result = subprocess.run(args, capture_output=True)
    return result

# Check if git is working
result = run_git(['git', 'status'])
print("Git status:", result.returncode)
if result.stdout:
    print("stdout:", result.stdout.decode('utf-8', errors='replace'))
if result.stderr:
    print("stderr:", result.stderr.decode('utf-8', errors='replace'))

# Configure git
run_git(['git', 'config', '--global', '--add', 'safe.directory', project_dir])
run_git(['git', 'config', 'user.name', 'GrowClimate'])
run_git(['git', 'config', 'user.email', 'info@growclimate.com'])

# Add remote
run_git(['git', 'remote', 'add', 'origin', 'https://github.com/Growclimate/Growclimate.git'])

# Add all files
run_git(['git', 'add', '.'])

# Commit
result = run_git(['git', 'commit', '-m', 'Initial commit: GrowClimate B2B website with Vue 3 + Vite'])
print("Commit result:", result.returncode)
if result.stdout:
    print("stdout:", result.stdout.decode('utf-8', errors='replace'))
if result.stderr:
    print("stderr:", result.stderr.decode('utf-8', errors='replace'))

print("\nDone! Git repository is initialized and committed.")
print("Next: Create GitHub repo and run 'git push -u origin main'")
