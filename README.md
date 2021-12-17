# google-drive-upload-action

This action upload your file to google drive folder

## Usage Example

```yaml
- uses: jumedi/google-drive-upload-action@master
  with:
    GOOGLE_CLIENT_ID: ${{secrets.GOOGLE_CLIENT_ID}}
    GOOGLE_CLIENT_SECRET: ${{secrets.GOOGLE_CLIENT_SECRET}}
    GOOGLE_REFRESH_TOKEN: ${{secrets.GOOGLE_REFRESH_TOKEN}}
    GOOGLE_FOLDER_ID: ${{secrets.GOOGLE_FOLDER}}
    FILE_PATH: ${{ github.workspace }}/.github/test.txt
    FILE_MIME_TYPE: text/plain
    FILE_NAME: test.txt
```

## Inputs

#### GOOGLE_CLIENT_ID

Required

Your Client ID (see [Environment Set Up](#Environment-Set-Up) for more details)

#### GOOGLE_CLIENT_SECRET

Required

Your Client Secret (see [Environment Set Up](#Environment-Set-Up) for more details)

#### GOOGLE_REFRESH_TOKEN

Required

Your Refresh Token (see [Environment Set Up](#Environment-Set-Up) for more details)

#### GOOGLE_FOLDER_ID

Required

Your Folder ID (see [Environment Set Up](#Environment-Set-Up) for more details)

#### FILE_PATH

Required

Path to your file

#### FILE_MIME_TYPE

Required

Your file mime type ([Common Mime Types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types))

#### FILE_NAME

Required

Output name of the file (Google Drive file name)

### Environment Set Up

[Youtube](https://www.youtube.com/watch?v=1y0-IfRW114&t=1042s&ab_channel=yoursTRULY)
[Notion](https://oil-narcissus-b29.notion.site/Setup-Google-Client-Secret-Client-ID-Refresh-Token-57dc63fa52534acaa129c7ec9db41010)
