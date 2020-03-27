
# Distil

> Simple async wrapper around Handlebars & HTML to PDF

## Installation
```
npm i @joduplessis/distil
```

## Some example usage:
```
import Distil from '@joduplessis/distil'

const file = path.resolve(__dirname, '../../views/invoice.handlebars')
const buffer = await Distil(file, { invoiceId: 'IN001' })
```
