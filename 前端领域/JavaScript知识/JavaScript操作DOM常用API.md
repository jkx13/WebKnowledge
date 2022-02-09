## 1. DOM
文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。
DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。

## 2. 如何访问DOM
我们可以通过JavaScript 来调用document和window元素的API来操作文档或者获取文档的信息。

## 3. Node
Node 是一个接口，有许多接口都从Node 继承方法和属性：
Document, Element, CharacterData (which Text, Comment, and CDATASection inherit), ProcessingInstruction, DocumentFragment, DocumentType, Notation, Entity, EntityReference。
Node 有一个nodeType的属性表示Node 的类型，是一个整数，不同的值代表不同的节点类型。具体如下表所示：
