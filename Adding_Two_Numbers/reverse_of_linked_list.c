#include<stdio.h>
#include<stdlib.h>
typedef struct Node{
    int val;
    struct Node* next;
}Node;

struct Node* HEAD = NULL;

void insertAtBegin(int n){
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->val = n;
    new_node->next = HEAD;
    HEAD = new_node;
}
void display(){
    Node* temp = HEAD;
    while (temp !=NULL){
        printf("\n %d\n",temp->val);
        temp = temp->next;
    }
}

int main(){
    insertAtBegin(12);
    insertAtBegin(3);
    insertAtBegin(44);
    display();
    return 0;
}