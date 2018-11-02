
import os
import signal

def stop_server():
    pid = int(open("html/pid").read())
    print ("now stopping server at ", pid)
    os.kill(pid, signal.SIGINT)

if __name__=="__main__":
    stop_server()
