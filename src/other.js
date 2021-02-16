export function asdf() {
    console.log([1, 2, 3, [4, 5]].flat())
}

[
    "@babel/preset-env",
    {
        "useBuiltIns": "usage",
        "corejs": "3.8",
        "targets": "chrome >= 87"
    }
]