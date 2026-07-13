def bubble_sort(arr):
    for passno in range(1,len(arr)):
        swapped=False
        for i in range(len(arr)-passno):
            if ascii[arr[i]]>ascii[arr[i+1]]:
                arr[i],arr[i+1]=arr[i+1],arr[i]
                swapped=True
        if not swapped:
            return arr
    return arr
bubble_sort(['apple','mango','ball'])