import urllib.request

try:
    req = urllib.request.Request('https://speedtest.com.sg', method='HEAD')
    with urllib.request.urlopen(req) as response:
        print(f"Status Code: {response.status}")
        print("Headers:")
        for header, value in response.getheaders():
            print(f"{header}: {value}")
except Exception as e:
    print(f"Error: {e}")
