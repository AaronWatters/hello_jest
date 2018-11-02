"""
Start a simple http server
"""

import http.server
import os
import socketserver

def start_serving():
    pid = os.getpid()
    f = open("html/pid", "w")
    f.write(str(pid))
    f.close()
    print ("starting server at ", pid)
    import http.server
    PORT = 8000
    Handler = http.server.SimpleHTTPRequestHandler
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("serving at port", PORT)
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("server at ", pid, " stopping.")

if __name__=="__main__":
    start_serving()
