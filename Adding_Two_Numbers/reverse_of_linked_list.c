#include<stdio.h>
#include<stdlib.h>
typedef struct Node{
    int val;
    struct Node* next;
}Node;

struct Node* HEAD = NULL;
struct Node* REV = NULL;

void insertAtBegin(int n){
    Node* new_node = (Node*)malloc(sizeof(Node));
    new_node->val = n;
    new_node->next = HEAD;
    HEAD = new_node;
}
void display(Node* l){
    Node* temp = l;
    while (temp !=NULL){
        printf("\n %d\n",temp->val);
        temp = temp->next;
    }
}
void storeReverse(Node* l){
    Node* temp = l;
    Node* rev = NULL;
    while(temp != NULL){
        Node* new_node = (Node*)malloc(sizeof(Node));
        new_node -> val = temp->val;
        new_node->next = rev;
        rev = new_node;
        temp = temp->next;
    }
    REV = rev;
}

int main(){
    insertAtBegin(12);
    insertAtBegin(3);
    insertAtBegin(44);
    display(HEAD);
    storeReverse(HEAD);
    display(REV);
    return 0;
}