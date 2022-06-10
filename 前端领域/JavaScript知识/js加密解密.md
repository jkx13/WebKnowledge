### 第一步：安装、引入 crypto-js
```
npm install --save crypto-js 
import CryptoJS from 'crypto-js'

```

### 第二步：实现加密方法
```
export function encryp( key , iv , data ){
    if( typeof data === "object" ){
        // 如果传入的data是json对象，先转义为json字符串
        try {
            data = JSON.stringify(data)
        } catch (error) {
            console.log("error:",error)
        }
    }
     // 统一将传入的字符串转成UTF8编码
    const dataHex = CryptoJS.enc.Utf8.parse( data ) // 需要加密的数据
    const keyHex = CryptoJS.enc.Utf8.parse( key ) // 秘钥
    const ivHex = CryptoJS.enc.Utf8.parse( iv ) // 偏移量
    const encrypted = CryptoJS.AES.encrypt( dataHex , keyHex , {
      iv: ivHex,
      mode: CryptoJS.mode.CBC, // 加密模式
      padding: CryptoJS.pad.Pkcs7
    })
    let encryptedVal = encrypted.ciphertext.toString()
    return encryptedVal //  返回加密后的值
}

```

### 第三步：实现解密方法
```
// 解密数据
export function decrypt( key , iv , encryptedVal ) {
/*
  传入的key和iv需要和加密时候传入的key一致  
*/
 // 统一将传入的字符串转成UTF8编码
    let encryptedHexStr = CryptoJS.enc.Hex.parse( encryptedVal  );
    let srcs = CryptoJS.enc.Base64.stringify( encryptedHexStr );
    const keyHex = CryptoJS.enc.Utf8.parse( key ) // 秘钥
    const ivHex = CryptoJS.enc.Utf8.parse( iv ) // 偏移量
    let decrypt = CryptoJS.AES.decrypt( srcs , keyHex , {
        iv: ivHex, 
        mode: CryptoJS.mode.CBC, 
        padding: CryptoJS.pad.Pkcs7
    });
    let decryptedStr = decrypt.toString( CryptoJS.enc.Utf8 );
    return decryptedStr.toString();
}

```

### 第四步：生成随机字符串
```
export function randomString(){
    // 正好通过encryp方法生成随机字符串 
    let key = "qwdkshjf9834jsdf" ;
    let iv = "dkfjdfgc987cs6sk";
    let word  = "skdjhfgc9823kslf"
    return encryp( key , iv , word ) 
}

```