/**
* Instructions:
* Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
* (https://leetcode.com/problems/merge-two-sorted-lists/)
* LEVEL: EASY

* Example:
* Input: 1->2->4, 1->3->4
* Output: 1->1->2->3->4->4

* Definition for singly-linked list.
* struct ListNode {
*  int val;
*  struct ListNode *next;
* };
**/

struct ListNode*	mergeTwoLists(struct ListNode* l1, struct ListNode* l2) {
	struct ListNode *curr;
	struct ListNode *new;

	if (!l1 && !l2)
		return (NULL);
	else if (!l1 || !l2)
		return (l1 ? l1 : l2);
	if (l1->val <= l2->val)
	{
		new = l1;
		l1 = l1->next;
	}
	else
	{
		new = l2;
		l2 = l2->next;
	}
	curr = new;
	while (l1 != NULL || l2 != NULL)
	{
		if (!l2 || (l1 && l1->val <= l2->val))
		{
			curr->next = l1;
			l1 = l1->next;
		}
		else
		{
			curr->next = l2;
			l2 = l2->next;
		}
		curr = curr->next;
	}
	return (new);
}