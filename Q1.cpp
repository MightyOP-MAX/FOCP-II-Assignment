/*Que1-> A teacher wants to calculate the average marks of three students to determine the class performance. 
Implement a solution to accept three numbers and compute their average.*/
#include<iostream>
using namespace std;
int main(){
int s1,s2,s3,total;
float avg;
cout<<"enter the marks of three students";
cin>>s1>>s2>>s3;

total=s1+s2+s3;

avg=total/3.0;
cout<<"average of the marks are"<<avg;

    return 0;
}