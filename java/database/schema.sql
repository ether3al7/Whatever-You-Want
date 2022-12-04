BEGIN TRANSACTION;

DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS invites CASCADE;
DROP TABLE IF EXISTS invitations CASCADE;
DROP TABLE IF EXISTS location CASCADE;
DROP TABLE IF EXISTS restaurants CASCADE;
DROP SEQUENCE IF EXISTS seq_user_id;
DROP SEQUENCE IF EXISTS seq_invite_id;
DROP SEQUENCE IF EXISTS seq_sender_id;
DROP SEQUENCE IF EXISTS seq_location_id;


CREATE SEQUENCE seq_user_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_invite_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_sender_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;

CREATE SEQUENCE seq_location_id
  INCREMENT BY 1
  NO MAXVALUE
  NO MINVALUE
  CACHE 1;


CREATE TABLE users (
	user_id int DEFAULT nextval('seq_user_id'::regclass) NOT NULL,
	username varchar(50) NOT NULL,
	password_hash varchar(200) NOT NULL,
	role varchar(50) NOT NULL,
	CONSTRAINT PK_user PRIMARY KEY (user_id)
);

CREATE TABLE invites (
	invite_id int DEFAULT nextval('seq_invite_id'::regclass) NOT NULL,
	sender_id int NOT NULL,
	receiver_id int /*NOT*/  NULL,
	event varchar(50) NOT NULL,
	location varchar(200) NOT NULL,
	food varchar(20) NOT NULL,
	CONSTRAINT PK_invites PRIMARY KEY (invite_id)
);
CREATE TABLE invitations (
	invite_id int DEFAULT nextval('seq_invite_id'::regclass) NOT NULL,
	receiver_id int NOT NULL,
	CONSTRAINT PK_invitations PRIMARY KEY (invite_id)
);
CREATE TABLE location (
	invite_id int NOT NULL,
	location_id int NOT NULL,
	CONSTRAINT PK_locations PRIMARY KEY (location_id)
);
CREATE TABLE restaurants (
	location_id int DEFAULT nextval('seq_location_id'::regclass) NOT NULL,
	name varchar(200) NOT NULL,
	address varchar(200) NOT NULL,
	city varchar(200) NOT NULL,
	zipcode int NOT NULL,
	phone varchar(20) NOT NULL,
	opening_time int NOT NULL,
	closing_time int NOT NULL,
	food varchar(20) NOT NULL,
	image varchar(2000) NOT NULL,
	CONSTRAINT PK_restaurants PRIMARY KEY (location_id)
);



INSERT INTO users (username,password_hash,role) VALUES ('user','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_USER');
INSERT INTO users (username,password_hash,role) VALUES ('admin','$2a$08$UkVvwpULis18S19S5pZFn.YHPZt3oaqHZnDwqbCW9pft6uFtkXKDC','ROLE_ADMIN');
INSERT INTO invites (sender_id,event,location,food) VALUES ('3','November 30 2022','32208','mexican');
INSERT INTO invitations (invite_id, receiver_id) VALUES ('3','4');
INSERT INTO location (invite_id, location_id) VALUES ('3','1');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('1','Applebees Bar and Grill','2611 N Kansas Ave','Liberal, KS','67901','(620) 624-2422','11','23','American', 'https://media-cdn.tripadvisor.com/media/photo-p/1b/b8/75/e1/applebee-s-neighborhood.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('2','Maricos Sinaloa','1115 N Kansas Ave','Liberal, KS','67901','(620) 604-5000','10','24','Seafood', 'https://s3-media0.fl.yelpcdn.com/bphoto/KbFMIgOvmtmV1e0fjL8fIQ/348s.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('3','El Ranchito','7 Village Plz','Liberal, KS','67901','','6','18','Mexican', 'https://s3-media0.fl.yelpcdn.com/bphoto/jEekGB8GY5KHBVhF4Aoh2g/348s.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('4','Ninja Sushi','43 Village Plz','Liberal, KS','67901','(620) 604-5222','10','21','Sushi', '');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('5','Terra Gaucha','4483 Southside Blvd','Jacksonville, FL','32216','(904) 551-5920','11','22','Brazilian', 'https://www.tampabay.com/resizer//5kDm84WbUFfdA2tStqsWMHs5on8=/900x506/smart/filters:format(webP)/arc-anglerfish-arc2-prod-tbt.s3.amazonaws.com/public/4MMBPTWEOMI6TKTRIBWI6S7HAY.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('6','Metro Diner','3302 Hendricks Avenue','Jacksonville, FL','32207','(904) 398-3701','7','15','Diner', 'https://cdn.metrodiner.io/wp-content/uploads/2019/11/MetroExterior.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('7','Enzas Italian Restaurant','10601 San Jose Blvd Ste 109','Jacksonville, FL','32257','(904) 268-4458','4','21','Italian', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F310466968035239023%2F&psig=AOvVaw1jci6fapwfT9KurAEaCo7Q&ust=1669843360454000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLCbzbSp1PsCFQAAAAAdAAAAABAE');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('8','Green Papaya Thai Cuisine','13141 City Station Drive','Jacksonville, FL','32218','(904) 696-8886','11','21','Thai', 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.squarespace-cdn.com%2Fcontent%2Fv1%2F5aaebc2196d455229a695d72%2F1650897703067-RAEAY3T944J0ONX91FBC%2Fwww.tarynintotravel.com%2B%257C%2BGreen%2BPapaya%2BGluten%2BFree%2BReview%2B%257C%2BGluten%2BFree%2BSushi%2Band%2BThai%2B%257C%2BSt.%2BAugustine%2BFood%2BReview%3Fformat%3D1500w&imgrefurl=https%3A%2F%2Fwww.tarynintotravel.com%2Forlando-gluten-free-eats-%2Fgreen-papaya-thai-sushi-gluten-free-review&tbnid=1rdlfLChqnmoEM&vet=10CGwQMyiUAWoXChMIiP2tqarU-wIVAAAAAB0AAAAAEAM..i&docid=pMTJcidoOGBzvM&w=1500&h=1200&q=Green%20Papaya%20Thai%20Cuisine&ved=0CGwQMyiUAWoXChMIiP2tqarU-wIVAAAAAB0AAAAAEAM');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('9','Southern Charm','3566 Saint Augustine Rd','Jacksonville, FL','32207','(904) 517-3637','12','20','Barbecue', 'https://s3-media0.fl.yelpcdn.com/bphoto/vy93hEMyWoohJs6-kptVtQ/348s.jpg');
INSERT INTO restaurants (location_id,name,address,city,zipcode,phone,opening_time,closing_time,food,image) VALUES ('10','Mandaloun','9862 Old Baymeadows Rd Deerwood Village Shopping Center','Jacksonville, FL','32256','(904) 646-1881','11','22','Mediterranean', 'https://media-cdn.tripadvisor.com/media/photo-p/1b/b8/75/e1/applebee-s-neighborhood.jpg');





COMMIT TRANSACTION;

