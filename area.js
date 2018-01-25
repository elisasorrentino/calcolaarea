function getArea (arr) {
    if(!(typeof(arr) === "undefined"))
    {
        if(Array.isArray(arr))
        {
            if(arr.length === 2)
            {
                arr[0]+="";
                arr[1]+="";
                if(!(isNaN(arr[0])) && !(isNaN(arr[1])))
                {
                    var a = parseInt(arr[0]);
                    var b = parseInt(arr[1]);
                    if(a>=0 && b>=0)
                    {
                        return a*b;
                    }else
                    {
                        return -1;
                    }
                }else
                    return -1;
            }else
                return -1;
        }else
            return -1;
    }else
        return -1;
}

module.exports = getArea;