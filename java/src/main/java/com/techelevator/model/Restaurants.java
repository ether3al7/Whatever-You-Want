package com.techelevator.model;

public class Restaurants {

    private int location_id;
    private String name;
    private String address;
    private String city;
    private int zipcode;
    private String phone;
    private int opening_time;
    private int closing_time;
    private String food;
    private String image;

    public Restaurants(int location_id, String name, String address, String city, int zipcode, String phone, int opening_time, int closing_time, String food, String image) {
        this.location_id = location_id;
        this.name = name;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.phone = phone;
        this.opening_time = opening_time;
        this.closing_time = closing_time;
        this.food = food;
        this.image = image;
    }

    public Restaurants() {
    }

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public int getZipcode() {
        return zipcode;
    }

    public void setZipcode(int zipcode) {
        this.zipcode = zipcode;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public int getOpening_time() {
        return opening_time;
    }

    public void setOpening_time(int opening_time) {
        this.opening_time = opening_time;
    }

    public int getClosing_time() {
        return closing_time;
    }

    public void setClosing_time(int closing_time) {
        this.closing_time = closing_time;
    }

    public String getFood() {
        return food;
    }

    public void setFood(String food) {
        this.food = food;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    @Override
    public String toString() {
        return "Restaurants{" +
                "location_id=" + location_id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", zipcode=" + zipcode +
                ", phone='" + phone + '\'' +
                ", opening_time=" + opening_time +
                ", closing_time=" + closing_time +
                ", food='" + food + '\'' +
                ", image='" + image + '\'' +
                '}';
    }
}
