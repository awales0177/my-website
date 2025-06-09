---
sidebar_position: 3
---

# Three

```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    CUSTOMER ||--o{ ADDRESS : "has"
    ORDER ||--|{ LINE-ITEM : contains
    ADDRESS ||--o{ ORDER : "uses"
    PRODUCT ||--o{ LINE-ITEM : "ordered in"
    PRODUCT-CATEGORY ||--o{ PRODUCT : contains
```

This diagram shows the relationships between different entities in our system:

- A CUSTOMER can place multiple ORDERS
- A CUSTOMER can have multiple ADDRESSES
- An ORDER can contain multiple LINE-ITEMS
- An ADDRESS can be used in multiple ORDERS
- A PRODUCT can be ordered in multiple LINE-ITEMS
- A PRODUCT-CATEGORY can contain multiple PRODUCTS 