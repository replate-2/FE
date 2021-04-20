# FE
This is the template for the Product Vision Document that teams complete after their initial icebreaker. The PVD is crucial to the planning phase and **is mandatory for all groups to complete and submit to their Project Lead before starting their project.**

# ☝️ Proposal

---

- What problem does your app solve?

    Many businesses have leftover food at the end of the day. Replate is an easy to use app that lets them effortlessly have those extras picked up by a Replate volunteer and donated to one of our worthy partner organizations. Choose a convenient time and a volunteer will show up and take your extras to a predetermined place of need.

- Be as specific as possible; how does your app solve the problem?

    Businesses create profiles on our app that they can then list the leftover food items for volunteers to view and select for pick up. By donating their food, it allows businesses to eliminate extra food waste and help feed those in need.

- What is the mission statement?

    The mission is to make a convenient way for businesses to give leftover food that would otherwise go to waste to those who could really use it through volunteer organizations.

# 💡 Features

---

- What features are required for your minimum viable product?

    1. User can signup/create an account as either a `volunteer` or a
    `business` by providing a unique `username`, a `password` and a valid
    `phoneNumber`. (mobile, web)
    2. Authenticated `business` can create,read, update and delete a
    `businessProfile`. At a minimum, this must include the following
    properties: (mobile, web)	- `username`: String	- `businessName`: String	- `businessAddress`: String	- `phoneNumber`
    3. Authenticated `business` can create a `pickupRequest` that must
    include the following properties: (mobile, web)	- `type` of food item: String	- `amount` of food item by count/weight: Integer	- `preferredPickupTime`: datetime
    4. Authenticated `business` can cancel(delete) or update a
    `pickupRequest`. (mobile, web)
    5. Authenticated `volunteer` can create, read, update and delete a
    `volunteerProfile`. At a minimum, this must have the following
    properties: (mobile, web)	- `username`: String	- `volunteerName`: String	- `phoneNumber`
    5. Authenticated `volunteer` can view a list of unassigned
    `pendingPickups` that have been created by all `business` users.
    (mobile)
    6. Authenticated `volunteer` can select a `pendingPickup` and be
    presented with a detail view. (mobile)
    7. Authenticated `volunteer` can "accept" a `pendingPickup` and it will
    be added to a list of `assignedPickups`. (mobile)
    8. Authenticated `volunteer` can "cancel"(delete) an `assignedPickup`
    and it will be removed from the `assignedPickup` list and added back to
    the `pendingPickup` list. (mobile, web)
    9. Authenticated `volunteer` can mark an `assignedPickup` as
    `completed`: Bool once the assigmnment is finished. (mobile, web)

- What features may you wish to put in a future release?

    1. Implement Push Notifications with your choice of API (APN, Twilio,
    Growl, etc.) that notifies an authenticated `volunteer` of new
    `pendingPickups` when they are created or updated by an authenticated
    `business`. (mobile, web)
    2. Implement feature that allows an authenticated `business` to view the `volunteerProfile` of the `volunteer` assigned to each
    `assignedPickup`. (web, mobile)
    3. Implement a feature that allows an authenticated `business` to see
    the realtime location of the `volunteer` of an `assignedPickup` (mobile, web)
    4. Implement a location-based notification that alerts an authenticated
    `business` when the `volunteer` for an `assignedPickup` is within a
    predetermined distance of the `businessAddress`. (mobile)
    5. UX: Collaborate on a portion or all of a Web MVP with any Web
    teammate. For example: File structuring, Git, Styles, Semantic elements, etc. Learn something new and practice cross-collaborating.

- What do the top 3 similar apps do for their users?

    Goodr - delivers leftover food from  businesses to non-profit groups who give the food to those in need. Tracks the amount of weight in donated food to estimate the environmental impact of the food not going to a landfill.

# 🛠 Frameworks - Libraries

---

- What 3rd party frameworks/libraries are you considering using?
    - Redux
    - Redux-Thunk
    - Axios
    - React-Router-Dom
    - Express
    - Supertest
    - Knex
    - Bcryptjs
- Do the APIs you need require you to contact them to gain access?

    No

- Are you required to pay to use said API(s)?

    No

# 🧮 For Data Scientists

---

- N/A

# 🎯 Target Audience

---

- Who is your target audience? Be specific.

    Restaurants, grocery stores and convenience stores with a lot of food that they throw out at the end of the day. Non-profit/volunteer groups that provide food to those in need.

- What feedback have you gotten from potential users?

- Have you validated this problem and your solution with a target audience? Describe how,

---

# 🔑 Prototype Key Feature(s)

---

- How long do you think it will take to implement these features?

    4 days - should have all MVP features implemented by end of build week

- Do you anticipate working on stretch functionality after completion of a Minimal Viable Product?

    Yes - if times allow, we will work on stretch features
