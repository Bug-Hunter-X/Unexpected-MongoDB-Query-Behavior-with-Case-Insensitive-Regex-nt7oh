```javascript
const query = {
  name: {
    $regex: 'John',
    $options: 'i'
  }
};

db.collection('users').find(query).toArray((err, result) => {
  if (err) {
    console.error('Error fetching users:', err); // Improved error logging
    // Consider a fallback or alternative action here
  } else {
    console.log(result); 
  }
});
```
This solution utilizes MongoDB's `$regex` operator with the `$options: 'i'` flag for case-insensitive matching, providing a cleaner and more reliable method. Error handling is also improved by logging the error with context, leading to better debugging.  Consider adding fallback mechanisms for production code.