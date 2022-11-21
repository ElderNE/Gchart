export const objtoarr = (obj) => {
    
    let arr = [];

    let id_parent = 0;
    let chaild_count = 0;

    function getProp(o, parent){
        for(let prop in o) {
            //считаем количество потомков
            if(o.sub)
                chaild_count=o.sub.length;
            else
                chaild_count=0;
            //сборка массива для дальнейшего построения дерева
            if(typeof(o[prop]) === 'object') {
                if(o.id)
                    id_parent = o.id;
                getProp(o[prop], id_parent);
            } else {
                if(typeof o['id'] === 'number')
                    //защищаемся, что бы не перписались значения с одинаковыми ключами
                    if(parent || parent === 0)
                        arr[o['id']-1] = {...arr[o['id']-1], [prop]: o[prop], parent, chaild_count};
                    else
                        arr[o['id']-1] = {...arr[o['id']-1], [prop]: o[prop]};
            }
        }
    }

    getProp(obj, 0);

    return arr;
}