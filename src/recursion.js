module.exports = function recursion (tree) {
    const arr = [];
    function rec(node, depth){
      if (node.value !== undefined) {
        if (arr[depth] === undefined) arr[depth] = [];
        arr[depth].push(node.value);        
      }
      if (node.left !== undefined) rec(node.left, depth+1);
      if (node.right !== undefined) rec(node.right, depth+1);
    }
    rec(tree, 0);
    return arr;
}