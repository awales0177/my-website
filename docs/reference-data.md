---
sidebar_position: 5
---

# Reference Data

<div class="flex-container">
  <img src="/img/bronze_man.png" width="100" alt="Bronze Man" />
  <div>
    <h2>Data Patterns & Examples</h2>
    <p>
      Reference data provides standardized values and patterns that help maintain data quality and consistency
      across your systems. Think of it as the foundation that Bronze Man uses to validate and transform data.
    </p>
  </div>
</div>

## Common Data Types

### <code class="code-blue">Dates & Times</code>

```python
# ISO 8601 Format
"2024-03-20T15:30:00Z"  # UTC
"2024-03-20T15:30:00-05:00"  # With timezone

# Common Formats
"MM/DD/YYYY"  # US Format
"DD/MM/YYYY"  # European Format
"YYYY-MM-DD"  # ISO Date
```

### <code class="code-purple">Identifiers</code>

```python
# UUID Format
"123e4567-e89b-12d3-a456-426614174000"

# Custom ID Patterns
"PROD-2024-001"  # Product ID
"USR-ABC123"     # User ID
"ORD-20240320-1" # Order ID
```

### <code class="code-orange">Currency & Numbers</code>

```python
# Currency Format
"$1,234.56"     # US Dollars
"€1.234,56"     # European Euros
"¥1,234"        # Japanese Yen

# Number Formats
"1,234.56"      # Decimal
"1.234,56"      # European Decimal
"1 234,56"      # Space Separated
```



## Data Quality Checks

### <code class="code-green">Completeness</code>
- Required fields present
- No null values in critical fields
- All mandatory attributes filled

### <code class="code-red">Accuracy</code>
- Values within expected ranges
- Format compliance
- Business rule adherence

### <code class="code-yellow">Consistency</code>
- Cross-field validation
- Referential integrity
- Format standardization

## Implementation Example

```python
def validate_reference_data(data):
    # Check required fields
    required_fields = ['id', 'name', 'type', 'created_at']
    for field in required_fields:
        if field not in data:
            raise ValueError(f"Missing required field: {field}")
    
    # Validate data types
    if not isinstance(data['id'], str):
        raise TypeError("ID must be a string")
    
    # Validate formats
    if not re.match(r'^[A-Z]{2}\d{3}$', data['id']):
        raise ValueError("Invalid ID format")
    
    # Validate date format
    try:
        datetime.fromisoformat(data['created_at'])
    except ValueError:
        raise ValueError("Invalid date format")
    
    return True
```

## Best Practices

1. <code class="code-blue">Standardization</code>
   - Use consistent formats
   - Follow industry standards
   - Document patterns

2. <code class="code-purple">Validation</code>
   - Implement strict rules
   - Use automated checks
   - Monitor compliance

3. <code class="code-orange">Maintenance</code>
   - Regular updates
   - Version control
   - Change tracking

## Related Topics

- [Data Quality](/docs/bronze)
- [Data Validation](/docs/validation)
- [Data Standards](/docs/standards) 