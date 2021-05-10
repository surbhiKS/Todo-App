# a=[]
# a.append({"id":4,"name":"abc"})
# a.append({"id":10,"name":"ab2"})
# a.append({"id":5,"name":"abc3"})
# a.append({"id":6,"name":"abc5"})


a=dict()
a[4]="abc"
a[10]="ab2"
a[5]="abc3"
a[6]="abc5"



for i in sorted(a.keys()):
    print("\"id:\"",i,',"name":',a[i])


# print(a)
