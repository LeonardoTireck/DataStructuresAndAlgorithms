class TrieNode {
  public children: { [key: string]: TrieNode } = {};
  public isEndOfWord: boolean = false;
}

class Trie {
  public root: TrieNode;
  public currentNode: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string) {
    this.currentNode = this.root;
    for (let char of word) {
      if (!(char in this.currentNode.children)) {
        this.currentNode.children[char] = new TrieNode();
      }
      this.currentNode = this.currentNode.children[char];
    }
    this.currentNode.isEndOfWord = true;
  }

  search(word: string) {
    this.currentNode = this.root;
    for (let char of word) {
      if (!(char in this.currentNode.children)) {
        return false;
      }
      this.currentNode = this.currentNode.children[char];
    }
    return this.currentNode.isEndOfWord;
  }

  starts_with(prefix: string) {
    this.currentNode = this.root;
    for (let char of prefix) {
      if (!(char in this.currentNode.children)) {
        return false;
      }
      this.currentNode = this.currentNode.children[char];
    }
    return true;
  }
}

const trie = new Trie();

trie.insert("Leonardo");
console.log(trie.starts_with("Le"));
