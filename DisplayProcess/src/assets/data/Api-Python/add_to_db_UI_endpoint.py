from flask import Flask, jsonify, request
import pymysql

db = pymysql.connect(host="mysql.cnc.hclets.com", port = 61606, user = "root", passwd = "Intern@123",
                               database = "nsds")
cur = db.cursor()

app = Flask(__name__)
@app.route('/check_processes', methods=['POST'])

def check_processes():
    response = []
    data = request.get_json()

    sql = ('''select pid from monitor_processes''')
    cur.execute(sql)

    ans = cur.fetchall()
    #print(ans)
    pids = []
    for i in ans:
        pids.append(i[0])
    #print(pids)

    for dct in data:
        if int(dct['pid']) not in pids:
            #add it to db
            sql_1 = ('''insert into monitor_processes
                        values(%s, %s)''')

            cur.execute(sql_1, (dct['pid'], dct['p_name']))
            db.commit()

            p_message = str(dct['pid']) + " : This process has been added to database"
            response.append({"p_name": p_message})

        else:
            p_message = str(dct['pid']) + " : This process already exists in the database"
            response.append({"p_name": p_message})

    return jsonify(response)

app.run(port=4000)


