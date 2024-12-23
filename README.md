# MongoDB Case-Insensitive Regex Bug

This repository demonstrates a potential issue with using case-insensitive regular expressions in MongoDB queries. The bug involves unexpected matches when the name field contains regex metacharacters. The solution improves error handling and avoids unintended matches.

## Bug

The original code uses a case-insensitive regex to find names containing "John". However, if the name field contains metacharacters (like "." or "*"), the regex matches unexpectedly.

## Solution

The improved solution uses `$regex` operator with the `$options` flag to handle case-insensitive searches correctly and enhances error handling for more robust application behavior.