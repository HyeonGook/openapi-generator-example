#!/bin/sh

rm -rf codegen/typescript-fetch

# Generate typescript-fetch codes via openapi-generator
docker run --rm -u `id -u $USER` -v ${PWD}:/local openapitools/openapi-generator-cli:v4.3.1 generate \
       -i /local/openapi.yaml \
       -g typescript-fetch \
       -c /local/codegen/bin/typescript-fetch-codegen.json \
       -o /local/codegen/typescript-fetch \
       --additional-properties=typescriptThreePlus=true,legacyDiscriminatorBehavior=false \

#python codegen/bin/typescript-fetch-codegen-fix.py codegen/typescript-fetch
