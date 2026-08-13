
# remove zero's at the last
# l=[1,3,0,3,0,3]
# b=[]
# c=[]
# for i in l:
#     if i!=0:
#         b.append(i)
#     else:
#         c.append(i)
# print(b+c)

# l=[1,3,0,4,0,3]
# for i in l:
#     if i==0:
#         l.remove(i)
#         l.append(i)
# print(l)

l=[1,2,0,4,0]
pos=0
for i in range(len(l)):
    if l[i]!=0:
        l[i],l[pos]=l[pos],l[i]
        pos+=1
print(l)

