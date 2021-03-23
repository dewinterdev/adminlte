<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $category = Category::all()->toArray();
        return array_reverse($category);
    }

    public function store(Request $request)
    {
        $product = new Category([
            'name' => $request->input('name'),
        ]);
        $product->save();

        return response()->json('A category has been created created!');
    }

    public function show($id)
    {
        $category = Category::find($id);
        return response()->json($category);
    }

    public function update($id, Request $request)
    {
        $category = Category::find($id);
        $category->update($request->all());

        return response()->json('The product has been updated!');
    }

    public function destroy($id)
    {
        $category = Category::find($id);
        $category->delete();

        return response()->json('The product has been deleted!');
    }
}
