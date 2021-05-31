
db.createCollection('calendars')
calendarsCollection = db.getCollection("calendars")
calendarsCollection.remove({})

calendarsCollection.insert(
    {
        Name: "gus",
        Street_Name: "Cool Street",
        Street_Number_Suffix: "Alley",
        Spatial_dispatching_information: "The red building",
        Neighborhood: "Best Neighborhood",
        Postal_Area: 9655434,
        Local_Municipality: "Hamlet Village",
        Country: "Argentina"

    }
)
/*
calendarsCollection.insert(
    {
        calendarId: 2,
        userId: 2,
        name: "Emma's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 2
            },
            {
                eventId: 3
            }
        ]
    }
)
calendarsCollection.insert(
    {
        calendarId: 3,
        userId: 3,
        name: "Alex's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 3
            },
            {
                eventId: 4
            }
        ]
    }
)
calendarsCollection.insert(
    {
        calendarId: 4,
        userId: 4,
        name: "Justin's Seattle U Classes",
        description: "For Seattle University Winter 2021 Quarter",
        events: [
            {
                eventId: 3
            },
            {
                eventId: 4
            }
        ]
    }
)
*/