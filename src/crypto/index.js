// crypto模块的目的是为了提供通用的加密和哈希算法。用纯JavaScript代码实现这些功能不是不可能，但速度会非常慢。nodejs用C/C++实现这些算法后，通过crypto这个模块暴露为JavaScript接口，这样用起来方便，运行速度也快。
// 密码学是计算机科学中的一个重要领域，它涉及到加密、解密、哈希函数和数字签名等技术。Node.js是一个流行的服务器端JavaScript运行环境，它提供了强大的密码学模块，使开发人员能够轻松地在其应用程序中实现各种密码学功能。本文将介绍密码学的基本概念，并探讨Node.js中常用的密码学API。


// const crypto = require('node:crypto');

// // 生成一个随机的 16 字节的初始化向量 (IV)
// const iv = Buffer.from(crypto.randomBytes(16));

// // 生成一个随机的 32 字节的密钥
// const key = crypto.randomBytes(32);

// // 创建加密实例，使用 AES-256-CBC 算法，提供密钥和初始化向量
// const cipher = crypto.createCipheriv("aes-256-cbc", key, iv);

// // 对输入数据进行加密，并输出加密结果的十六进制表示
// cipher.update("小满zs", "utf-8", "hex");
// const result = cipher.final("hex");

// // 解密
// const de = crypto.createDecipheriv("aes-256-cbc", key, iv);
// de.update(result, "hex");
// const decrypted = de.final("utf-8");
// console.log("Decrypted:", decrypted);


// const crypto = require('node:crypto')
// // 生成 RSA 密钥对
// const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
//   modulusLength: 2048,
// });

// // 要加密的数据
// const text = '小满zs';

// // 使用公钥进行加密
// const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(text, 'utf-8'));

// // 使用私钥进行解密
// const decrypted = crypto.privateDecrypt(privateKey, encrypted);

// console.log(decrypted.toString());



const crypto = require('node:crypto');

// 要计算哈希的数据
let text = '123456';

// 创建哈希对象，并使用 MD5 算法
const hash = crypto.createHash('md5');

// 更新哈希对象的数据
hash.update(text);

// 计算哈希值，并以十六进制字符串形式输出
const hashValue = hash.digest('hex');

console.log('Text:', text);
console.log('Hash:', hashValue);