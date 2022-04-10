# Incorrect items in the API documentation

Timers in messages don't have configuration and format separated, its one object
Clocks in messages don't have format separated out, its just one object

```return new Macro(newMacro.field_macro)``` // API docs say it should just be newMacro, but it's actually newMacro.field_macro