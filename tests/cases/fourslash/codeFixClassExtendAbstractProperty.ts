/// <reference path='fourslash.ts' />

////abstract class A {
////    abstract x: number;
////    abstract y: this;
////    abstract z: A;
////}
////
////class C extends A {}

verify.codeFix({
    description: "Implement inherited abstract class",
    // TODO: GH#18795
    newFileContent:
`abstract class A {
    abstract x: number;
    abstract y: this;
    abstract z: A;
}

class C extends A {
    x: number;
    y: this;
    z: A;
}`
});
