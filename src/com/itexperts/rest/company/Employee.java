package com.itexperts.rest.company;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Employee {
	
	private String name;
	private String surname;
	private Department department;
	private int ranking;
	
	public Employee() {
	
	}
	
	
	public Employee(String name, String surname, Department department, int ranking) {
		this.name = name;
		this.surname = surname;
		this.department = department;
		this.ranking = ranking;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public Department getDepartment() {
		return department;
	}

	public void setDepartment(Department department) {
		this.department = department;
	}

	public int getRanking() {
		return ranking;
	}

	public void setRanking(int ranking) {
		this.ranking = ranking;
	}
}
