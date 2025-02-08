BEGIN TRANSACTION;

CREATE TABLE small_businesses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    bio TEXT NOT NULL,
    email TEXT NOT NULL,
    address TEXT NOT NULL,
    website TEXT NOT NULL,
    opening_hours TEXT NOT NULL
);

CREATE TABLE events (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT NOT NULL,
    date TEXT NOT NULL,
    organizer TEXT NOT NULL,
    list_of_attendees TEXT NOT NULL,
    website TEXT NOT NULL
);

CREATE TABLE users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
);

INSERT INTO small_businesses (name, bio, email, address, website, opening_hours) VALUES
    ('The Coffee Shop', 'A cozy place to enjoy coffee and pastries.', 'coffeeshop@gmail.com', '123 Coffee St', 'www.coffeeshop.com', 'Mon-Fri: 7am-7pm, Sat-Sun: 8am-5pm'),
    ('The Book Nook', 'A small bookstore with a great selection of books.', 'booknook@hotmail.com', '698 Book St', 'www.booknook.com', 'Mon-Sat: 10am-6pm, Sun: Closed'),
    ('The Flower Shop', 'A local florist offering fresh flowers and arrangements.', 'flower@proton.me', '456 Flower St', 'www.flowershop.com', 'Mon-Fri: 9am-5pm, Sat: 10am-4pm, Sun: Closed'),
    ('The Bakery', 'A family-owned bakery with fresh bread and pastries.', 'bakery@gmail.com', '789 Bakery St', 'www.bakery.com', 'Mon-Sat: 6am-6pm, Sun: 7am-4pm'),
    ('The Gym', 'A local gym with a variety of fitness classes.', 'gym@hotmail.com', '321 Gym St', 'www.gym.com', 'Mon-Fri: 5am-11pm, Sat-Sun: 7am-7pm'),
    ('The Art Studio', 'An art studio offering classes and workshops.', 'art@gmail.com', '654 Art St', 'www.artstudio.com', 'Mon-Fri: 10am-8pm, Sat: 10am-6pm, Sun: Closed');

INSERT INTO events (address, date, organizer, list_of_attendees, website) VALUES
    ('438 Main St', '2025-05-01 11am-5pm', 'John Deere', '[The Coffee Shop, The Book Nook, The Gym, The Art Studio]', 'www.event1.com'),
    ('3729 Elm St', '2025-06-15 10am-4pm', 'Fulcrum GT', '[The Flower Shop, The Bakery, The Coffee Shop]', 'www.event2.com'),
    ('164 Oak St', '2025-07-20 9am-3pm', 'Michael Jordan', '[The Gym, The Art Studio]', 'www.event3.com');

INSERT INTO users (name) VALUES
    ('Mario'),
    ('Luigi'),
    ('Peach'),
    ('Toad'),
    ('Yoshi'),
    ('Bowser'),
    ('Wario'),
    ('Waluigi'),
    ('Daisy'),
    ('Dry Bones');

COMMIT;