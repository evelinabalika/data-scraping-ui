import psutil

def get_windows_process():
    pid = []
    p_name = []

    for proc in psutil.process_iter():
        try:
            # Get process name & pid from process object.
            p_name.append(proc.name())
            pid.append(proc.pid)
        except (psutil.NoSuchProcess, psutil.AccessDenied, psutil.ZombieProcess):
            pass

    json_lst = []
    for num in range(0, len(pid)):
        dct = {}
        dct["pid"] = pid[num]
        dct["p_name"] = p_name[num]
        dct["selected"] = False
        json_lst.append(dct)

    return (json_lst)
