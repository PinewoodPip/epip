# Documentation
The documentation of functions, classes and other symbols in this site is automatically generated from LuaDoc annotations within the mod, using the `update_docs.py` script.

The script parses the lua files in the Bootstrap scripts and searches line-by-line for annotations. Once these are gathered, the markdown files of the documentation site are searched for special html tags and the output of the doc script is inserted between them accordingly.

For example, this tag inserts the functions of MyLib between the doc opening and closing tags. **If there was already content inbetween these tags, it is replaced; you should thus not modify the output.**
```
<doc class="MyLib" symbols="Function">

</doc>
```

The scripts gathers annotations using two structures: "Symbols" and "Metadata".
A symbol represents an actual symbol within the code, for example a function or a class. Each symbol may be composed of various metadata. As an example, function symbols capture comments and parameter annotations (`---@param`) as their metadata.

The `Library` class in the script represents a library within the mod, and aggregates its symbols. When you use the html tags in markdown, the script looks for the corresponding Library and calls the `export()` method to generate the documentation to be inserted.