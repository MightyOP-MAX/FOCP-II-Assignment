/* Q3. Write a C++ program to create a class Rectangle with length and breadth
 as data members.
Use a constructor to initialize the dimensions and calculate the area of the rectangle.*/

#include<iostream>
#include<string>
using namespace std;
class Rectangle{
private:
float length;
float breadth;
public:
Rectangle();
Rectangle(float ,float );
float calculatearea(){
    return (length*breadth);
}
void displaydetails(){
    cout<<"\narea is: "<<calculatearea();
}
};
Rectangle::Rectangle(){
    cout<<"\ndefault parameter was called";
    length=0;
    breadth=0;
}
Rectangle::Rectangle(float length,float breadth){
    this->length=length;
    this->breadth=breadth;
}
int main(){  
Rectangle r1,r2(2.2f,2.2f);

//r1.calculatearea();
r1.displaydetails();
r2.displaydetails();
return 0;
}