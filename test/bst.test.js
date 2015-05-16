'use strict';
var assert = require('chai').assert,
    bst = require('..');

describe('bst', function()
{
    it('bst.createnode', function ()
    {
        var node = bst.createNode(10);
        assert.isObject(node);
        assert(node.value === 10, 'node.value === 10');
    });
    it('bst.createtree.nonodes', function ()
    {
        var root = bst.createTree([], []);
        assert.isUndefined(root);
    });
    it('bst.createtree.onenode', function ()
    {
        var root = bst.createTree([1], [1]);
        assert.isObject(root);
        assert(root.value === 1, 'root.value === 1');
        assert.isUndefined(root.left);
        assert.isUndefined(root.right);
    });
    it('bst.createtree.2nodes.leftonly', function ()
    {
        var root = bst.createTree([1, 2], [1, 2]);
        assert.isObject(root);
        assert(root.value === 2, 'root.value === 2');
        assert(root.left.value === 1, 'root.left.value === 1');
        assert.isUndefined(root.right);
    });
    it('bst.createtree.2nodes.rightonly', function ()
    {
        var root = bst.createTree([2, 3], [3, 2]);
        assert.isObject(root);
        assert(root.value === 2, 'root.value === 2');
        assert.isUndefined(root.left);
        assert(root.right.value === 3, 'root.right.value === 3');
    });
    it('bst.createtree.3nodes', function ()
    {
        var root = bst.createTree([1, 2, 3], [1, 3, 2]);
        assert.isObject(root);
        assert(root.value === 2, 'root.value === 2');
        assert(root.left.value === 1, 'root.left.value === 1');
        assert(root.right.value === 3, 'root.right.value === 3');
    });
    it('bst.createtree.morenodes', function ()
    {
        var inorder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        var postorder = [1, 3, 2, 5, 7, 6, 4, 9, 11, 10, 8];
        var root = bst.createTree(inorder, postorder);
        assert.isObject(root);
        var i2 = root.visitInOrder();
        var p2 = root.visitPostOrder();
        assert.deepEqual(i2, inorder);
        assert.deepEqual(p2, postorder);
    });
});