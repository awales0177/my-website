---
sidebar_position: 6
---

# Interactive ER Diagram

import ZoomImage from '@site/src/components/ZoomImage';

This page contains an interactive Entity-Relationship diagram for our database schema. You can:
- Click on the image to zoom in/out
- Hover over entities to see their details
- Use mouse wheel to zoom in/out when zoomed
- Click outside the image to exit zoom mode

## Database Schema

<ZoomImage 
  src="/img/3.png" 
  alt="ER Diagram showing database relationships"
  width="100%"
/>

## Entity Descriptions

### CARS
The main entity representing vehicles in the system. Each car has:
- Basic information (make, model, year)
- Technical specifications (engine, transmission)
- Performance metrics (mileage, MPG)
- Ownership details (VIN, registration)

### MAINTENANCE
Records of all maintenance activities:
- Service dates and types
- Costs and descriptions
- Links to specific cars

### OWNERS
Information about vehicle owners:
- Contact details
- Purchase history
- Ownership periods

### CAR_OWNERS
Junction table tracking ownership history:
- Start and end dates
- Links cars to owners
- Maintains ownership history

## Relationships

1. **CARS to MAINTENANCE**
   - One-to-many relationship
   - A car can have multiple maintenance records
   - Each maintenance record belongs to one car

2. **CARS to OWNERS**
   - Many-to-many relationship
   - A car can have multiple owners over time
   - An owner can have multiple cars
   - Managed through CAR_OWNERS junction table

3. **CAR_OWNERS to CARS/OWNERS**
   - Many-to-one relationships
   - Links ownership records to specific cars and owners
   - Tracks ownership history with dates 