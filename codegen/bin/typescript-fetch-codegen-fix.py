import regex as re
import glob
import sys

path = sys.argv[1]
finder = re.compile(r"(switch \((json)\[')(.*)('\]\))")
camel_to_snake = re.compile(r'(?<!^)(?=[A-Z])')

for filename in glob.glob(path+'/**/*.ts', recursive=True):
    with open(filename, 'r') as f:
        filedata = f.read()
        camel = re.search(finder, filedata)
        if camel is not None:
            camel = camel.groups()[2]
            snake = re.sub(camel_to_snake, '_', camel).lower()
            new_data = re.sub(finder, r'\1' + snake + r'\4', filedata)
            print(snake)
            with open(filename, 'w') as f:
                f.write(new_data)
