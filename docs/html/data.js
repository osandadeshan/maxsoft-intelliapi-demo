var tags = ["get_all_decks_list", "get_all_medicines", "create_deck", "database_test"]
var specs = [{"path":"specs\\create_deck.html","name":"Create A Deck Specification","scenarios":[{"name":"Details of testing environment","tags":["create_deck"]},{"name":"Create a Deck using valid parameters","tags":["create_deck"]},{"name":"Create a Deck using empty exam date","tags":["create_deck"]},{"name":"Create a Deck using null exam date","tags":["create_deck"]},{"name":"Create a Deck using invalid exam date","tags":["create_deck"]}]},{"path":"specs\\database_test.html","name":"Database Validation Specification","scenarios":[{"name":"Validate specific users information in the users table","tags":["database_test"]},{"name":"Validate all users information in the users table","tags":["database_test"]}]},{"path":"specs\\get_all_decks_list.html","name":"Get All Decks List Specification","scenarios":[{"name":"Details of testing environment","tags":["get_all_decks_list"]},{"name":"Get all decks list using a valid userId","tags":["get_all_decks_list"]},{"name":"Get all decks list using an invalid userId","tags":["get_all_decks_list"]},{"name":"Get all decks list using userId as empty","tags":["get_all_decks_list"]},{"name":"Get all decks list using userId as null","tags":["get_all_decks_list"]},{"name":"Get all decks list using an invalid query parameter","tags":["get_all_decks_list"]},{"name":"Get all decks list using invalid query parameters","tags":["get_all_decks_list"]},{"name":"Get all decks list without any query parameters","tags":["get_all_decks_list"]}]},{"path":"specs\\get_all_medicines.html","name":"Get All Medicines Specification","scenarios":[{"name":"Get All Medicines using a valid token","tags":["get_all_medicines"]}]},{"path":"specs\\login.html","name":"Login Specification","scenarios":[{"name":"Login Scenario","tags":[]}]},{"path":"specs\\new get_all_medicines.html","name":"Get All Medicines Specification","scenarios":[{"name":"Details of testing environment","tags":["get_all_medicines"]},{"name":"Get All Medicines using a valid token","tags":["get_all_medicines"]}]},{"path":"specs\\new_create_bucket.html","name":"New Create A Bucket Specification","scenarios":[{"name":"Create a Bucket in the bucket page using valid token","tags":[]},{"name":"Create a Bucket in the bucket page using invalid token","tags":[]},{"name":"Create a Bucket in the bucket page using no token","tags":[]},{"name":"Create a Bucket in the bucket page using empty value as the goal title","tags":[]},{"name":"Create a Bucket in the bucket page using null value as the goal title","tags":[]},{"name":"Create a Bucket in the bucket page using 1 character as the goal title","tags":[]},{"name":"Create a Bucket in the bucket page using 2 characters as the goal title","tags":[]},{"name":"Create a Bucket in the bucket page using past date","tags":[]}]}]