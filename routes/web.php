<?php

use Illuminate\Support\Facades\Route;

use App\Models\Todo;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/todos', function () {
    $todos = Todo::all();
    return view('home',["todos"=> $todos]);
});



Route::post('/todos/create', function () {
    $data = request()->all();
    $todo = new Todo([
        'title'=>$data['title'],
        'description'=>$data['description']
    ]);
    $todo->save();
    return redirect('/todos');
});

Route::get('/todos/delete/{id}', function ($id) {
    $todo = Todo::find($id);
    $todo->delete();
    return redirect('/todos');
});

Route::get('/todos/edit/{id}', function ($id) {
    $todo = Todo::find($id);
    return view('/update', [
        "todo"=> $todo
    ]);
});

Route::post('/todos/update/{id}', function ($id) {
    $todo = Todo::find($id);
    $data = request()->all();
    $todo->update([
        'title'=>$data['title'],
        'description'=>$data['description']
    ]);
    return redirect('/todos');
});


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
