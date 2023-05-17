// tree

function createNode(key) {
  const children = [];
  return {
    key,
    children: children,
    addChild(childKey) {
      const childNode = createNode(childKey);
      children.push(childNode);
      return childNode;
    },
  };
}

function createTree(rootKey) {
  const root = createNode(rootKey);

  return {
    root,
    print() {
      let result = '';
      function traverse(node, visitFn, dept) {
        visitFn(node, dept);
        if (node.children.length) {
          node.children.forEach(function (child) {
            traverse(child, visitFn, dept + 1);
          });
        }
      }
      function addKeyToResult(node, depth) {
        result +=
          result.length === 0
            ? node.key
            : `\n${' '.repeat(depth * 2)}${node.key}`;
      }

      traverse(root, addKeyToResult, 1);
      return result;
    },
  };
}

const dom = createTree('html');
const head = dom.root.addChild('head');
const title = head.addChild('title');

const body = dom.root.addChild('body');
const header = body.addChild('header');
const main = body.addChild('main');
const footer = body.addChild('footer');

const h1 = header.addChild('h1');
const p = main.addChild('p');
const copy = footer.addChild('CopyRight 2023');

console.log(dom.print());
