---
"@rethinkhealth/hl7v2": patch
---

We added browser compatiblity of the package. The package can now be used in the browser. 

```js
<script src="https://unpkg.com/@rethinkhealth/hl7v2"></script>
<script>
  const hl7v2 = window.hl7v2;
  const message = hl7v2.parse('MSH|^~\&|...');

  console.log(message);
</script>
```
