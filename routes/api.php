<?php

use App\Http\Controllers\TodoController;
// use App\Http\Resources\Todo;
use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/todos', function () {
    return Todo::all();    
});

Route::post('/todos', function (Request $request) {
    // var_dump($request->all());
        // Todo::create($request->all());
        // return $request->all();
    // return response()->json(['message' => 'Todo created successfully']);
    $todo = new Todo();
    $todo->title = $request->title;
    $todo->description = $request->description;
    $todo->completed = $request->completed;
    $todo->priority = $request->priority;   
    $res=$todo->save();
    if($res){
        return response()->json(['message' => 'Todo created successfully']);
    }else{
        return response()->json(['message' => 'Todo not created']);
    }
});
Route::get('/todos/{id}', function ($id) {
    return Todo::find($id);
});

Route::put('/todos/{id}', function (Request $request, $id) {
    $todo = Todo::find($id);
    $todo->title = $request->title;
    $todo->description = $request->description;
    $todo->completed = $request->completed;
    $todo->priority = $request->priority;  
    $res=$todo->save();
    if($res){
        return response()->json(['message' => 'Todo updated successfully']);
    }else{
        return response()->json(['message' => 'Todo not updated']);
    }
});
Route::delete('/todos/{id}', function ($id) {
    $todo = Todo::find($id);
    $res=$todo->delete();
    if($res){
        return response()->json(['message' => 'Todo deleted successfully']);
    }else{
        return response()->json(['message' => 'Todo not deleted']);
    }
});
    
