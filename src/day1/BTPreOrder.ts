function walk(head: BinaryNode<number> | null, path: number[]) {
    if (!head) return path;

    path.push(head.value);

    walk(head.left, path);
    walk(head.right, path);

    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
