import requests

url = "https://pen-to-print-handwriting-ocr.p.rapidapi.com/recognize/"

payload = "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"srcImg\"; filename=\"image.jpg\"\r\n\r\n\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"Session\"\r\n\r\nstring\r\n-----011000010111000001101001--\r\n\r\n"
headers = {
    'content-type': "multipart/form-data; boundary=---011000010111000001101001",
    'x-rapidapi-host': "pen-to-print-handwriting-ocr.p.rapidapi.com",
    'x-rapidapi-key': "2bc95ebda9mshaf46bdbb59d0b4cp14e1bdjsn3702d7601e9d"
    }

response = requests.request("POST", url, data=payload, headers=headers)

print(response.text)