## 1. 使用 canvas 的 toDataURL 进行判断
- HTMLCanvasElement.toDataURL() 方法返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。图片的分辨率为96dpi。
- 如果传入的类型非“image/png”，但是返回的值以“data:image/png”开头，那么该传入的类型是不支持的。
- 如果画布的高度或宽度是0，那么会返回字符串“data:,”。
- Chrome支持“image/webp”类型。
- toDataURL方法将图片转化为包含dataURI的DOMString，通过 base64 编码前面的图片类型值是image/webp进行判断。

```javascript
var isSupportWebp = function () {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch(err) {
    return false;
  }
}

isSupportWebp()
```

### 在服务端根据请求header信息判断浏览器是否支持webp
- Reqest Headers 
- Accept: image/webp,image/apng,image/*,
- 服务端可以根据Accept 里面是否有 image/webp 进行判断;

### 通过加载一张 webp 图片进行判断

```javascript
const supportsWebp = ({ createImageBitmap, Image }) => {
  if (!createImageBitmap || !Image) return Promise.resolve(false);

  return new Promise(resolve => {
      const image = new Image();
      image.onload = () => {
          createImageBitmap(image)
              .then(() => {
                  resolve(true);
              })
              .catch(() => {
                  resolve(false);
              });
      };
      image.onerror = () => {
          resolve(false);
      };
      image.src = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  });
};

const webpIsSupported = () => {
  let memo = null;
  return () => {
      if (!memo) {
          memo = supportsWebp(window);
      }
      return memo;
  };
};

webpIsSupported()().then(res => {
    console.log("是否支持 webp", res)
}).catch(err => {
    console.log(err)
})
```

```javascript
function check_webp_feature(feature, callback) {
    var kTestImages = {
        lossy: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
        lossless: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
        alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
        animation: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
    };
    var img = new Image();
    img.onload = function () {
        var result = (img.width > 0) && (img.height > 0);
        callback(feature, result);
    };
    img.onerror = function () {
        callback(feature, false);
    };
    img.src = "data:image/webp;base64," + kTestImages[feature];
}
```